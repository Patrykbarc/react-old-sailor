export function Logo({ orientation }) {
  console.log(orientation);
  return (
    <div>
      {orientation === "horizontal" ? (
        <a href="#">
          <img src="/icons/logo-horizontal.png" alt="Old Sailor Barber logo" />
        </a>
      ) : (
        <a href="#">
          <img src="/icons/logo-vertical.png" alt="Old Sailor Barber logo" />
        </a>
      )}
    </div>
  );
}
