import { Link, LinkProps, useNavigate } from "react-router-dom";
import { forwardRef } from "react";

interface ScrollLinkProps extends LinkProps {
  className?: string;
}

const ScrollLink = forwardRef<HTMLAnchorElement, ScrollLinkProps>(
  ({ to, onClick, children, ...props }, ref) => {
    const navigate = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "instant" });
      navigate(to as string);
      if (onClick) onClick(e);
    };

    return (
      <Link ref={ref} to={to} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  }
);

ScrollLink.displayName = "ScrollLink";

export { ScrollLink };
