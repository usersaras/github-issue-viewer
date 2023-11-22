import { GridChild, GridParent } from "saras-git-component-library";
import { useViewIssue } from "../api/useViewIssue";
import { useAtom } from "jotai";
import {
  apiErrorAtom,
  apiLoadingAtom,
  issuesAtom,
} from "../api/store/apiStore";

const IssuesViewer = () => {
  useViewIssue();
  const [data] = useAtom(issuesAtom);
  const [loading] = useAtom(apiLoadingAtom);
  const [error] = useAtom(apiErrorAtom);

  if (loading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error.message}</>;
  }

  return (
    <div>
      <GridParent rows="2" columns="3" gap="lg">
        <div>
          <GridChild rowStart="1" rowEnd="3">
            Child
          </GridChild>
          <GridChild>
            <></>
          </GridChild>

          <GridChild>Child</GridChild>
          <GridChild>Child</GridChild>
          <GridChild>Child</GridChild>
        </div>
      </GridParent>
    </div>
  );
};

export default IssuesViewer;
