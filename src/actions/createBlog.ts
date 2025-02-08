"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createBlog = async (data: any) => {
  const res = await fetch("http://localhost:5000/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const blogInfo = await res.json();
  return blogInfo;
};
