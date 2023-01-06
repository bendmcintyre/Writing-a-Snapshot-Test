import { render, screen } from "@testing-library/react";
import GitHubCard from "./GitHubCard.js";
import renderer from "react-test-renderer";

test("renders a snapshot", () => {
  const tree2 = renderer.create(<GitHubCard />).toJSON();
});
