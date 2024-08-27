import { ContentContainer, SelectionContainer } from "../components/Profile.styled.js";
import { useEffect, useState } from "react";
import axios from "axios";

function ProfileComments() {
  const [textContent, setTextContent] = useState([]);


  const GetTextContent = async () => {
    const token = window.localStorage.getItem("token");

    try {
      const res = await axios.get("http://localhost:8000/backend/api/review/comment/user/me/", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API Response:", res.data);

      if (res.data && Array.isArray(res.data?.text_content)) {
        setTextContent(res.data?.text_content);
        console.log("Text content set:", res.data?.text_content);
      } else {
        setTextContent([]);
        console.log("No text content found in response.");
      }
    } catch (error) {
console.log(error)

    }
  };

  useEffect(() => {
    GetTextContent();
  }, []);

  return (
    <ContentContainer>
      <div className="comments">
        <h3>Comments</h3>
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {textContent?.length > 0 ? (
        textContent.map((content, index) => (
          <SelectionContainer key={index}>
            <h3>Review {index + 1}</h3>
            <p>{data?.text_content}</p>
          </SelectionContainer>
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </ContentContainer>
  );
}

export default ProfileComments;



