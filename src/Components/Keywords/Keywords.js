import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import "./Keywords.css";

const TagsInput = (props) => {
  const [tags, setTags] = useState(props.tags);

  const removeTags = (indexToRemove) => {
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const addTags = (event) => {
    if (event.target.value !== "") {
      setTags([...tags, capitalizeFirstLetter(event.target.value)]);
      props.selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  return (
    <div className="tags_input">
      <input
        type="text"
        onKeyUp={(event) => (event.key === "Enter" ? addTags(event) : null)}
        placeholder="Add up-to 10 keywords"
        disabled={tags.length >= 10 ? true : false}
        style={{ borderColor: tags.length >= 10 ? "red" : "" }}
      />
      <ul id="tags">
        {tags.map((tag, index) => (
          <li key={index} className="tag">
            <span className="tag_title">{tag}</span>
            <span className="tag_close_icon" onClick={() => removeTags(index)}>
              <FaTimes className="remove_keyword_icon" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function Keywords() {
  const selectedTags = (tags) => {
    console.log(tags);
  };
  return (
    <div>
      <TagsInput
        selectedTags={selectedTags}
        tags={["Celebrity Art", "Futurism"]}
      />
    </div>
  );
}

export default Keywords;
