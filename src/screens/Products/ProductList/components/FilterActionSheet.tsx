import ActionSheet from "react-native-actions-sheet";
import { Text } from "../../../../components";

const FilterActionSheet = (props) => {
  return (
    <ActionSheet ref={props.ref}>
      <Text>Test</Text>
    </ActionSheet>
  );
};

export default FilterActionSheet;
