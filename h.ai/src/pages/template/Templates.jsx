import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./Template.css";
import TemplateCard from "../../components/TemplateCard";
import Footer from "../../components/footer/Footer";
import CallToAction from "../../components/CallToAction";

function Templates() {
  const [isTagMenuOpen, setIsTagMenuOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const tagOptions = [
    "Business",
    "Tours & Travels",
    "Portfolio",
    "E-commerce",
    "Medical website",
  ];

  const toggleTagMenu = () => {
    setIsTagMenuOpen((prev) => !prev);
  };

  const handleCheckboxChange = (tag) => {
    setSelectedTags((prevSelected) =>
      prevSelected.includes(tag)
        ? prevSelected.filter((t) => t !== tag)
        : [...prevSelected, tag]
    );
  };

  const removeTag = (tag) => {
    setSelectedTags((prevSelected) => prevSelected.filter((t) => t !== tag));
  };

  const templatesPerPage = 12;

  // Example template data — replace with real data
  const templates = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Template ${i + 1}`,
  }));

  const totalPages = Math.ceil(templates.length / templatesPerPage);
  const indexOfLast = currentPage * templatesPerPage;
  const indexOfFirst = indexOfLast - templatesPerPage;
  const currentTemplates = templates.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Optional: Smooth scroll to template section
    const list = document.querySelector(".template-list");
    if (list) list.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      <div className="search-bar">
        <h3 className="heading">
          Choose Your Vision. <br />
          It's Just Below.
        </h3>

        <input
          type="text"
          placeholder="Search for templates, eg: portfolio, tours & travels, etc..."
          className="search-input"
          id="search"
        />
      </div>

      <div className="tags-section">
        <div className="heading-tags">
          <div className="default-tag" onClick={toggleTagMenu}>
            All
          </div>

          <div className="selected-tags">
            {selectedTags.map((tag) => (
              <div className="tag-chip" key={tag}>
                {tag}
                <span className="close-btn" onClick={() => removeTag(tag)}>
                  &times;
                </span>
              </div>
            ))}
          </div>
        </div>

        {isTagMenuOpen && (
          <div className="all-tags">
            <ul>
              {tagOptions.map((tag) => (
                <li key={tag}>
                  <p>{tag}</p>
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => handleCheckboxChange(tag)}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Templates List */}
      <div className="template-section">
        <div className="template-list">
          {currentTemplates.map((template) => (
            <TemplateCard key={template.id} title={template.title} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>

      <CallToAction firstLine="Get Started for Free" />
      <Footer />
    </>
  );
}

export default Templates;
