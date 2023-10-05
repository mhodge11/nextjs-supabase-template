declare module "next-build-id" {
  export interface NextBuildIdOptions {
    dir: string;
    describe?: boolean;
    fallbackToSha?: boolean;
  }

  export default function nextBuildId(
    options: NextBuildIdOptions,
  ): Promise<string | null>;

  nextBuildId.sync = sync;

  function sync(options: NextBuildIdOptions): string;
}
