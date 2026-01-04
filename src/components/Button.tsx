interface buttonProps {
  title: string;
}
export default function Button({ title }: buttonProps) {
  return (
    <button
      type="button"
      className="cursor-pointer text-center w-full py-4 rounded-4xl text-white font-bold bg-gray-800 hover:bg-linear-to-b from-[hsl(252,100%,67%)] to-[hsl(241,81%,54%)] "
    >
      {title}
    </button>
  );
}
