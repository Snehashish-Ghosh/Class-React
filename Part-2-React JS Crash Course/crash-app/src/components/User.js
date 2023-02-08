const User = (props) => {
  return (
    <>
      <h3>User Name: {props.userName}</h3>
      <h3>User ID: {props.UserId}</h3>
    </>
  );
};
export default User;

// fragnence: Here we have used fragnence <> </> to avoid extra div. Cause we cant return tho item at once
