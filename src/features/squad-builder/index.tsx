import React from 'react';

import { Button, Input } from 'src/components/ui';

export default () => {
  return (
    <div>
      <Input
        placeholder="Hola"
        label="Pokemon Name"
      />
      <Button>Submit Pokemon</Button>
    </div>
  );
};
