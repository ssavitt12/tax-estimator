const getDatabaseUrl = (nodeEnv) => {
  return (
    {
      development: "postgres://postgres:postgres@localhost:5432/tax-estimator_development",
      test: "postgres://postgres:postgres@localhost:5432/tax-estimator_test",
      e2e: "postgres://postgres:postgres@localhost:5432/tax-estimator_e2e",
    }[nodeEnv] || process.env.DATABASE_URL
  );
};

module.exports = getDatabaseUrl;
