import { useNavigate } from "react-router-dom";

export default function TemplateCard() {
  const navigate = useNavigate();

  const handleTemplateClick = () => {
    navigate("/templates");
  };
  
  return (
    <div className="template-card" onClick={handleTemplateClick}>
      <div className="template-thumbnail"/>
      <p>Protfolio</p>
    </div>
  );
}
