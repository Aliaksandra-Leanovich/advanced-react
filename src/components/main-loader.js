import { defer } from "react-router";
import delay from "../util/delay";

export function loader() {
  return defer({ promise: delay("Fetched Data", 1000) });
}
