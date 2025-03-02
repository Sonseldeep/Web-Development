import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="flex gap-3">
      <Input type="text" placeholder="Search..." />
      <Button variant="destructive" type="submit">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
