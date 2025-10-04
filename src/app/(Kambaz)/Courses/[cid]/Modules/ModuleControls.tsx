"use client";

import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModulesControls() {
  return (
    <div
      id="wd-modules-controls"
      className="text-nowrap d-flex flex-wrap align-items-center mb-3 gap-2"
    >
      {/* Collapse All Button */}
      <Button
        id="wd-collapse-all"
        variant="secondary"
        size="lg"
      >
        Collapse All
      </Button>

      {/* View Progress Button */}
      <Button
        id="wd-view-progress"
        variant="secondary"
        size="lg"
      >
        View Progress
      </Button>

      {/* Publish All Dropdown */}
      <Dropdown className="d-inline">
        <Dropdown.Toggle
          variant="secondary"
          size="lg"
          id="wd-publish-all-btn"
        >
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            Unpublish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Add Module Button */}
      <Button
        id="wd-add-module-btn"
        variant="danger"
        size="lg"
      >
        <FaPlus className="me-2" /> Module
      </Button>
    </div>
  );
}
