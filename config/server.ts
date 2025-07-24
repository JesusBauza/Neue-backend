export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['RAIQCnAd/U+jnt8cfQPtPQ==', 'tJPM7NuCnzw+gu4GJ+kEoTQ==']),
  },
});
