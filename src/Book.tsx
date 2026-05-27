export default function Book({
  position,
  title,
  author,
  year,
}: {
  position: number;
  title: string;
  author: string;
  year: number;
}) {
  return (
    <li>
      {position}. {title} was published by {author} in {year}
    </li>
  );
}
