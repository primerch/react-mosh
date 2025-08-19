import usePosts from "./hook/usePosts.ts";

const query = {
  pageSize: 10,
};

const PostList = () => {
  const { data, fetchNextPage } = usePosts(query);
  console.log(data);

  return (
    <>
      <table className="table-zebra table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Post ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data?.pages.map((page) => (
            <>
              {page.map((post) => (
                <tr>
                  <td>{post.userId}</td>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </>
          ))}
        </tbody>
      </table>
      <button className="btn btn-primary mr-5" onClick={() => fetchNextPage()}>
        Show More
      </button>
    </>
  );
};
export default PostList;
