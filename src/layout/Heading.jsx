import AddButton from '@/components/AddButton';
import Logo from '@c/Logo';
import SearchBar from '@c/SearchBar';
import useDataList from '@/hooks/useDataList';
import { useState } from 'react';

export default function Heading() {
  const { data } = useDataList();
  const [search, setSearch] = useState('');

  if (data) {
    const aa = data.items.map((item) => {
      if (item.name === search) {
        console.log(item.name);
      }
    });
  }

  const getValue = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="flex flex-row gap-10 items-center justify-between mb-16">
      <Logo />
      <SearchBar onChange={getValue} />
      <AddButton />
    </header>
  );
}
