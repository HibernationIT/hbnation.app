export type BlockType =
  | "bookmark"
  | "breadcrumb"
  | "bulleted_list_item"
  | "callout"
  | "child_database"
  | "child_page"
  | "code"
  | "column"
  | "column_list"
  | "divider"
  | "embed"
  | "equation"
  | "file"
  | "heading_1"
  | "heading_2"
  | "heading_3"
  | "image"
  | "link_preview"
  | "link_to_page"
  | "numbered_list_item"
  | "paragraph"
  | "pdf"
  | "quote"
  | "synced_block"
  | "table"
  | "table_of_contents"
  | "table_row"
  | "template"
  | "to_do"
  | "toggle"
  | "unsupported"
  | "video";

export type Color =
  | "blue"
  | "blue_background"
  | "brown"
  | "brown_background"
  | "default"
  | "gray"
  | "gray_background"
  | "green"
  | "green_background"
  | "orange"
  | "orange_background"
  | "yellow"
  | "green"
  | "pink"
  | "pink_background"
  | "purple"
  | "purple_background"
  | "red"
  | "red_background"
  | "yellow_background";

export type DatabaseParent = {
  type: "database_id";
  database_id: string;
};
export type PageParent = {
  type: "page_id";
  page_id: string;
};
export type WorkspaceParent = {
  type: "workspace";
  workspace: string;
};
export type BlockParent = {
  type: "block_id";
  block_id: string;
};

export type AllUsers = {
  object: "user";
  id: string;
  type: string;
  name: string;
  avatar_url: string;
};
export type People = {
  person: { email: string } & object;
} & AllUsers;
export type Bots = {
  bot: object;
  owner: { type: string } & object;
  workspace_name: string;
};

export type Emoji_ = {
  emoji: string;
};
export type File_ = {
  file?: {
    url: string;
    expiry_time: string;
  };
  external?: {
    url: string;
  };
};

export type RichText = {
  type: string;
  text: {
    content: string;
    link: string | null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string | null;
};

export type Block = {
  object: string;
  id: string;
  parent: DatabaseParent | PageParent | WorkspaceParent | BlockParent;
  type: BlockType;
  created_time: string;
  created_by: People | Bots;
  last_edited_time: string;
  last_edited_by: People | Bots;
  archived: boolean;
  has_children: boolean;
};

export type Paragraph = {
  paragraph: {
    rich_text: RichText[];
    color: Color;
    children: Block[];
  };
} & Block;
export type Bookmark = {
  bookmark: {
    caption: RichText[];
    url: string;
  };
} & Block;
export type Breadcumb = {
  breadcrumb: {};
} & Block;
export type BulletedListItem = {
  bulleted_list_item: {
    rich_text: RichText[];
    color: Color;
    children: Block[];
  };
} & Block;
export type Callout = {
  callout: {
    rich_text: RichText[];
    icon: {
      type: "emoji" | "file";
    } & Emoji_ &
      File_;
    color: Color;
  };
} & Block;
export type Code = {
  code: {
    caption: RichText[];
    rich_text: RichText[];
    language: string;
  };
} & Block;
export type ColumnList = {
  column_list: {
    children: Block[];
  };
} & Block;
export type Column = {
  column: {
    children: Block[];
  };
} & Block;
export type Equation = {
  equation: {
    expression: string;
  };
} & Block;
export type File = {
  file: {
    caption: RichText[];
    type: "file" | "external";
    name: string;
  } & File_;
} & Block;
export type Headings = {
  [key: string]: {
    rich_text: RichText[];
    color: Color;
    is_toggleable: boolean;
    children: Block[];
  };
} & Block;
export type Image = {
  image: {
    type: "file" | "external";
  } & File_;
} & Block;
export type NumberedListItem = {
  numbered_list_item: {
    rich_text: RichText[];
    color: Color;
    children: Block[];
  };
} & Block;
export type Quote = {
  quote: {
    rich_text: RichText[];
    color: Color;
    children: Block[];
  };
} & Block;
export type Table = {
  table: {
    table_width: number;
    has_column_header: boolean;
    has_row_header: boolean;
    children: TableRow[];
  };
} & Block;
export type TableRow = {
  table_row: {
    cells: RichText[][];
  };
};
export type ToDo = {
  to_do: {
    rich_text: RichText[];
    checked: boolean;
    color: Color;
    children: Block[];
  };
} & Block;
export type Toggle = {
  toggle: {
    rich_text: RichText[];
    color: Color;
    children: Block[];
  };
} & Block;
export type Video = {
  video: {
    type: "file" | "external";
  } & File_;
} & Block;
