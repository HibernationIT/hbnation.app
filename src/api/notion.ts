const apiKey = process.env.NOTION_API_KEY;

export async function getDatabase(
  databaseId: string | undefined,
  body: {
    filter?: Filter;
    sorts?: Sorts;
    page_size?: number;
    start_cursor?: string;
  }
) {
  const res = await requestValue(
    `https://api.notion.com/v1/databases/${databaseId}/query`,
    {
      method: "POST",
      body: JSON.stringify(body),
    }
  );
  return await res.json();
}

export async function getPage(pageId: string) {
  return await getAll(pageId);
}

async function getAll(blockId: string) {
  const response = await getBlockChild(blockId);

  return Promise.all(
    response.results.map(async (child: any) => {
      if (child.has_children) {
        child[child.type].children = await getAll(child.id);
        return child;
      }
      return child;
    })
  );
}

async function getBlockChild(blockId: string) {
  const res = await requestValue(
    `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`,
    { method: "GET" }
  );

  return await res.json();
}

async function requestValue(url: string, option: any) {
  return await fetch(url, {
    ...option,
    next: {
      revalidate: 1800,
    },
    headers: {
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
}

export type Filter = {
  property?: string;
} & FilterType;

type FilterType = AndFilter &
  OrFilter &
  CheckboxFilter &
  DateFilter &
  FilesFilter &
  FormulaFilter &
  MultiSelectFilter &
  NumberFilter &
  PeopleFilter &
  RelationFilter &
  RichTextFilter &
  RollupFilter &
  SelectFilter &
  StatusFilter &
  TimestampFilter &
  IdFilter;

type AndFilter = {
  and?: Filter[];
};
type OrFilter = {
  or?: Filter[];
};

type CheckboxFilter = {
  checkbox?: {
    equals?: boolean;
    does_not_equal?: boolean;
  };
};
type DateFilter = {
  date?: {
    after?: string;
    before?: string;
    equals?: string;
    is_empty?: true;
    is_not_empty?: true;
    next_month?: {};
    next_week?: {};
    next_year?: {};
    on_or_after?: string;
    on_or_before?: string;
    past_month?: {};
    past_week?: {};
    past_year?: {};
    this_week?: {};
  };
};
type FilesFilter = {
  files?: {
    is_empty?: true;
    is_not_empty?: true;
  };
};
type FormulaFilter = {
  formula?: {
    data?: {
      checkbox?: CheckboxFilter;
      date?: DateFilter;
      number?: NumberFilter;
      string?: RichTextFilter;
    };
  };
};
type MultiSelectFilter = {
  multi_select?: {
    contains?: string;
    does_not_contain?: string;
    is_empty?: true;
    is_not_empty?: true;
  };
};
type NumberFilter = {
  number?: {
    does_not_equal?: number;
    equals?: number;
    greater_than?: number;
    greater_than_or_equal_to?: number;
    is_empty?: true;
    is_not_empty?: true;
    less_than?: number;
    less_than_or_equal_to?: number;
  };
};
type PeopleFilter = {
  people?: {
    contains?: string;
    does_not_contain?: string;
    is_empty?: true;
    is_not_empty?: true;
  };
};
type RelationFilter = {
  relation?: {
    contains?: string;
    does_not_contain?: string;
    is_empty?: true;
    is_not_empty?: true;
  };
};
type RichTextFilter = {
  rich_text?: {
    contains?: string;
    does_not_contain?: string;
    does_not_equal?: string;
    ends_with?: string;
    equals?: string;
    is_empty?: true;
    is_not_empty?: true;
    starts_with?: string;
  };
};
type RollupFilter = {
  rollup?: {
    any?: FilterType;
    every?: FilterType;
    none?: FilterType;
  };
};
type SelectFilter = {
  select?: {
    equals?: string;
    does_not_equal?: string;
    is_empty?: true;
    is_not_empty?: true;
  };
};
type StatusFilter = {
  status?: {
    equals?: string;
    does_not_equal?: string;
    is_empty?: true;
    is_not_empty?: true;
  };
};
type TimestampFilter = {
  timestamp?: "created_time" | "last_edited_time";
  created_time?: DateFilter;
};
type IdFilter = {
  unique_id?: {
    does_not_equal?: number;
    equals?: number;
    greater_than?: number;
    greater_than_or_equal_to?: number;
    less_than?: number;
    less_than_or_equal_to?: number;
  };
};

type Sorts = SortType[];
type SortType = {
  property: string;
  direction: "ascending" | "descending";
};
