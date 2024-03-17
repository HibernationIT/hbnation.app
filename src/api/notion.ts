const apiKey = process.env.NOTION_API_KEY;

export async function getDatabase(
  databaseId: string,
  body: { filter: any; sorts: any }
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

async function requestValue(url: string, option: any) {
  return await fetch(url, {
    ...option,
    next: {
      revalidate: 1,
    },
    headers: {
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  });
}
