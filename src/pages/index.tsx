import {
  Box,
  Button,
  Flex,
  GridChild,
  GridParent,
  Input,
  Text,
} from "saras-git-component-library";
import { useViewIssue } from "../api/useViewIssue";

import withNavbar from "../utils/hof/withNavbar";
import { API_RESPONSE } from "../utils/types/api.types";

const IssuesViewer = () => {
  const { data, error, isLoading } = useViewIssue<API_RESPONSE[]>();

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{error?.message}</>;
  }

  console.log(data);

  return (
    <div>
      <GridParent rows="2" columns="12" gap="lg">
        <div>
          {/* search */}
          <GridChild colStart="1" colEnd="2">
            <></>
          </GridChild>
          <GridChild colStart="3" colEnd="10">
            <Flex
              direction="column"
              gap="md"
              alignItems="flex-start"
              justifyContent="flex-start"
              children={[
                <Text color="darkGrey">Looking for another repo?</Text>,
                <Flex
                  gap="sm"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  direction="row"
                  children={[
                    <Input
                      placeholder="Enter git hub repo..."
                      sizeStyle={"base"}
                      width="sm"
                      rounded="sm"
                    />,
                    <Button color="blue" rounded="sm" size="base">
                      Submit
                    </Button>,
                  ]}
                ></Flex>,
              ]}
            ></Flex>
          </GridChild>
          <GridChild colStart="11" colEnd="12">
            <></>
          </GridChild>
          {/* search */}

          <GridChild colStart="1" colEnd="2">
            <></>
          </GridChild>

          <GridChild colStart="3" colEnd="10">
            <>
              {data?.map((datum) => {
                return (
                  <Box
                    border="leftBlue"
                    size="base"
                    rounded="sm"
                    background="lightGrey"
                  >
                    <GridParent rows="2">
                      <Flex
                        alignItems="flex-end"
                        direction="column"
                        justifyContent="flex-start"
                        children={[
                          <Text fontWeight="bold" fontSize="lg">
                            {datum.title}
                          </Text>,
                          <Flex
                            alignItems="flex-start"
                            justifyContent="flex-start"
                            direction="row"
                            gap="md"
                            children={[
                              <Box background="blue" size="xs" rounded="full">
                                <Text
                                  color="lightGrey"
                                  fontSize="xs"
                                  as="span"
                                  fontWeight="light"
                                >
                                  {datum.state}
                                </Text>
                              </Box>,
                              <div>Opended by x </div>,
                            ]}
                          ></Flex>,
                        ]}
                      ></Flex>
                    </GridParent>
                  </Box>
                );
              })}
            </>
          </GridChild>

          <GridChild colStart="11" colEnd="12">
            <></>
          </GridChild>
        </div>
      </GridParent>
    </div>
  );
};

const x = withNavbar(IssuesViewer);

export default x;
