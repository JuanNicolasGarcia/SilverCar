import { FC } from "react";
import ListItem from './ListItem/ListItem';
import "./ListView.scss";

interface ListViewProps {
  listResults: Array<any>
}

const ListView: FC<ListViewProps> = ({ listResults }) => {
  return (
    <div className="listView__root">
      {listResults.map(item => (
        <div>
          <ListItem item={item} />
        </div>
      ))}
    </div>
  );
};

export default ListView;
