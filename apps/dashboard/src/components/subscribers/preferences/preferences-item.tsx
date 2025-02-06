import { STEP_TYPE_TO_ICON } from '@/components/icons/utils';
import { Step } from '@/components/primitives/step';
import { Switch } from '@/components/primitives/switch';
import { STEP_TYPE_TO_COLOR } from '@/utils/color';
import { capitalize } from '@/utils/string';
import { ChannelTypeEnum } from '@novu/shared';
import { motion } from 'motion/react';

const CHANNEL_LABELS_LOOKUP: Record<`${ChannelTypeEnum}`, string> = {
  [ChannelTypeEnum.IN_APP]: 'In-App',
  [ChannelTypeEnum.EMAIL]: 'Email',
  [ChannelTypeEnum.SMS]: 'SMS',
  [ChannelTypeEnum.CHAT]: 'Chat',
  [ChannelTypeEnum.PUSH]: 'Push',
};

type PreferencesItemProps = {
  channel: ChannelTypeEnum;
  enabled: boolean;
  onChange: (checked: boolean) => void;
};

export function PreferencesItem({ channel, enabled, onChange }: PreferencesItemProps) {
  const Icon = STEP_TYPE_TO_ICON[channel];

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="mt-2 flex w-full items-center justify-between space-y-1">
        <div className="flex items-center gap-2">
          <Step variant={STEP_TYPE_TO_COLOR[channel]} className="size-5">
            <Icon />
          </Step>
          <span className="text-foreground-950 text-xs font-medium">{capitalize(CHANNEL_LABELS_LOOKUP[channel])}</span>
        </div>
        <Switch checked={enabled} onCheckedChange={onChange} />
      </div>
    </motion.div>
  );
}
