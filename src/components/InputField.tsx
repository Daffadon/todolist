import React from "react";
type Props = {
  activity: string;
  setActivity: React.Dispatch<React.SetStateAction<string>>;
  doFunction: (e: React.FormEvent) => void;
};

const InputField: React.FC<Props> = ({ activity, setActivity, doFunction }) => {
  return (
    <form
      onSubmit={doFunction}
      className="min-h-[15vh] w-full flex justify-center items-center flex-col">
      <input
        type="text"
        name="activity"
        value={activity}
        onChange={(e) => {
          setActivity(e.target.value);
        }}
        className=" mt-5 w-[15rem] xl:w-1/4 rounded h-10 bg-neutral-200 px-3 border-2 outline focus:border-blue-500 font-bold border-black focus:border-solid transition-all" />
      <button type="submit" className="mt-4 bg-amber-700 px-8 py-3 text-white font-extrabold rounded-lg">
        ADD
      </button>
    </form>
  );
};

export default InputField;
