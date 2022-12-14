import { Grid } from '@chakra-ui/react';

interface propArgs {
  user: string;
}

const Header = ({ user }: propArgs) => {
  return (
    <Grid
      alignItems={'center'}
      justifyContent={'center'}
      bg={'gray.700'}
      textTransform="uppercase"
      color="gray.400"
      fontWeight="extrabold"
    >
      {user}
    </Grid>
  );
};

export default Header;
