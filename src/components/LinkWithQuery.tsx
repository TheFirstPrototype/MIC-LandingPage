import React from 'react';
import { Link, LinkProps, useLocation } from 'react-router-dom';

export const LinkWithQuery = ({ to, ...props }: LinkProps) => {
  const location = useLocation();
  
  // Append current query string to the destination if one exists
  const toWithSearch = React.useMemo(() => {
    if (!location.search) return to;

    if (typeof to === 'string') {
      // If `to` already contains a search string, we would need to merge them,
      // but assuming our app links don't have existing query strings in `to` (like "/summit")
      const [path, existingSearch] = to.split('?');
      if (existingSearch) {
        // Very basic merge if needed
        const newParams = new URLSearchParams(existingSearch);
        const currentParams = new URLSearchParams(location.search);
        currentParams.forEach((value, key) => {
          if (!newParams.has(key)) {
            newParams.append(key, value);
          }
        });
        return `${path}?${newParams.toString()}`;
      }
      return `${to}${location.search}`;
    }

    if (typeof to === 'object') {
      return {
        ...to,
        search: to.search ? to.search : location.search,
      };
    }

    return to;
  }, [to, location.search]);

  return <Link to={toWithSearch} {...props} />;
};

export default LinkWithQuery;
