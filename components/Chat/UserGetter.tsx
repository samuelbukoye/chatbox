import { Grid } from '@chakra-ui/react';
import { setStringStateType } from '../../utils/interfaces';

interface propArgs {
  setUser: setStringStateType;
}

const UserGetter = ({ setUser }: propArgs) => {
  return (
    <Grid
      w="full"
      h="Full"
      overflowY="scroll"
      pt="6"
      pb="3"
      px="3"
      gridGap="6"
    ></Grid>
  );
};

export default UserGetter;
