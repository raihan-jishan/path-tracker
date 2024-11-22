import Link from "next/link";
const Button = ({
  path,
  label,
  icon,
  paddingMedium,
  roundedFull,
  roundedMedium,
  customBg,
  heroPadding, 
  customStyle
}) => {
  return (
    <Link
      href={path ? path : "/"}
      className={`flex items-center justify-center text-center ${
        customBg
          ? "bg-gray-100 font-semibold text-black"
          : "bg-black dark:bg-white text-white dark:text-black"
      }   hover:bg-black/70 dark:bg-white/90 flex gap-2       max-lg:gap-2 max-lg:rounded-full   ${
        paddingMedium
          ? "p-5 px-12"
          : heroPadding
          ? "p-5 px-12 max-lg:p-4 max-lg:px-3 "
          : "p-3 px-4"
      }  ${
        roundedMedium
          ? "rounded-md"
          : roundedFull
          ? "rounded-full"
          : "rounded-xl"
      }  ${customStyle}`}
    >
      {label} {icon}
    </Link>
  );
};

export default Button;
