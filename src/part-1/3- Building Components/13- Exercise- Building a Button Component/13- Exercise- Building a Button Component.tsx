interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick: () => void;
}

export default function Button({
  children,
  color = "primary",
  onClick,
}: Props) {
  let buttonStyle = "";

  switch (color) {
    case "primary":
      buttonStyle = "bg-blue-300";
      break;
    case "secondary":
      buttonStyle = "bg-gray-300";
      break;
    case "success":
      buttonStyle = "bg-green-300";
      break;
    case "danger":
      buttonStyle = "bg-red-300";
      break;
    case "warning":
      buttonStyle = "bg-yellow-300";
      break;
    case "info":
      buttonStyle = "bg-blue-300";
      break;
    default:
      buttonStyle = "bg-gray-200"; // optional but recommended fallback
  }

  return (
    <button onClick={onClick} className={`rounded px-3 py-2 ${buttonStyle}`}>
      {children}
    </button>
  );
}
