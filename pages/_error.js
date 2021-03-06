function ServerError({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occured on server`
        : "An error occured on client"}
    </p>
  );
}

ServerError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ServerError;
