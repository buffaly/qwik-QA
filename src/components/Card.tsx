import { component$ } from "@builder.io/qwik";

interface ICardProps {
  question: string;
  name: string;
}

const Card = component$((props: ICardProps) => {
  return (
    <div class="flex w-full bg-white shadow-lg rounded-lg my-2 max-w-[500px]">
      <div class="flex flex-col w-full items-start px-4 py-6">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-semibold text-gray-900 -mt-1">{props.question}</h2>
          </div>
          <p class="w-full mt-3 text-gray-700 text-sm text-right">
            from: {props.name}
          </p>
      </div>
    </div>
  );
})

export default Card