import * as SeparatorNative from '@radix-ui/react-separator';

const Separator = () => (
  <div className="w-full px-5">
    <SeparatorNative.Root className="bg-white data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px my-[15px]" />
  </div>
);

export default Separator;