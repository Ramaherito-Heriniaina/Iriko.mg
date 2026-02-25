import base from '@irikomg/prettier-config/base';

/** @type {import("prettier").Config} */
export default {
  ...base,
  importOrder: [
    '^react$',
    '^next(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^@irikomg/ui(.*)$',
    '^@/components/ui(.*)$',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/lib/(.*)$',
    '^@/types/(.*)$',
    '^[./]',
  ],
};
