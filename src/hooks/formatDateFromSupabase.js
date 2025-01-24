export function formatSupabaseDate(createdAt) {
    if (!createdAt) return "";
  
    const date = new Date(createdAt);
  
    const options = { month: "long", day: "numeric", year: "numeric" };
  
    return new Intl.DateTimeFormat("en-US", options).format(date);
  }