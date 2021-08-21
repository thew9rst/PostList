import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

function PostFilter({ filter, setFilter }) {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
        placeholder="Search"
      />
      <MySelect
        value={filter.sort}
        onChange={(selectedSort) =>
          setFilter({ ...filter, sort: selectedSort })
        }
        defaultValue="Sorn on"
        options={[
          { value: "title", name: "Title" },
          { value: "body", name: "Descriptions" },
        ]}
      />
    </div>
  );
}

export default PostFilter;
