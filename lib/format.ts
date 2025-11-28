const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatDate(
  isoDate?: string | null,
  fallback?: string | null
): string {
  if (isoDate) {
    try {
      return dateFormatter.format(new Date(isoDate));
    } catch {
      return isoDate;
    }
  }

  if (fallback) {
    return fallback;
  }

  return "Unknown date";
}

export function formatMetaDate(isoDate?: string | null): string | null {
  if (!isoDate) return null;
  try {
    return dateFormatter.format(new Date(isoDate));
  } catch {
    return isoDate;
  }
}

export function formatViews(viewCount?: number | null, max?: number | null) {
  if (viewCount == null) {
    return null;
  }

  if (max == null) {
    return `View ${viewCount}`;
  }

  return `View ${Math.min(viewCount, max)} of ${max}`;
}

