export function Logo({ orientation = "horizontal" }) {
  return (
    <>
      {orientation === "horizontal" ? (
        <img src="/icons/logo-horizontal.png" alt="Old Sailor Barber logo" />
      ) : (
        <img src="/icons/logo-vertical.png" alt="Old Sailor Barber logo" />
      )}
    </>
  );
}
