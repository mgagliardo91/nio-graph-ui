import React, { useState } from 'react';
import { Form, FormControl, Button, Spinner, CardDeck, Card } from 'react-bootstrap';
import { useSearchRunnableLazyQuery } from 'src/queries/types/runnable';
import { Runnable } from 'src/graphql';

interface RunnableItemProps {
  runnable: Runnable;
}

const RunnableItem = ({ runnable } : RunnableItemProps) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{ runnable.name }</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{ runnable.facility?.name || 'No Facility'}</Card.Subtitle>
        <Card.Text>
          { `${runnable.repository}:${runnable.version}` }
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const Runnables : React.FC<{}> = () => {
  const [searchValue, setSearchValue] = useState('');
  const [searchRunnable, { loading, data }] = useSearchRunnableLazyQuery();

  const onSearch = (searchString: string) => {
    if (searchString && searchString.length) {
      searchRunnable({
        variables: {
          name: searchString
        }
      });
    }
  }

  return (
    <div className="mt-4 mx-3 my-3">
      <Form inline>
        <FormControl type="text" placeholder="Search Runnables" size-="lg" onChange={(e) => { setSearchValue(e.target.value) }}/>
        <Button
          variant="primary"
          className="ml-2"
          disabled={loading}
          onClick={() => !loading && onSearch(searchValue)}>
          { loading ? <Spinner animation="grow" /> : 'Search' }
        </Button>
      </Form>
      <CardDeck className="mt-2">
        { data && data.Runnable!.map((r) => <RunnableItem key={r!.name} runnable={r as Runnable} />)}
      </CardDeck>
    </div>
  );
};

export default Runnables;