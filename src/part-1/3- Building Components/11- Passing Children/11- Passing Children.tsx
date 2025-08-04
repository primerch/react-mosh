import { ReactNode } from "react";

// 🌟 ReactNode allows your component to accept various types of valid React content
interface Props {
  children: ReactNode;
}

const Alert = ({ children }: Props) => {
  return (
    <div className="rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
      {children}
    </div>
  );
};

/* 🚀 WHY USING CHILDREN?
   - ✅ **Flexibility**: Easily accepts different types of content (Text, HTML, JSX Components)
   - 🔄 **Reusable UI**: Makes one component flexible enough to reuse with multiple scenarios
   - 🧑‍💻 **Cleaner syntax**: Clearly shows nested JSX content directly in components, improving readability
*/

export default Alert;
