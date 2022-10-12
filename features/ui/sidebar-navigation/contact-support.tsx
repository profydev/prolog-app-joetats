import React from "react";
import { Button } from "@features/ui";
import { ListItem, Anchor, Icon } from "./menu-item-link";

type ContactSupportProps = {
  className?: string;
  text: string;
  iconSrc: string;
  isCollapsed: boolean;
};

const SendEmail = Button.withComponent("a");

export function ContactSupport({
  className,
  iconSrc,
  isCollapsed,
}: ContactSupportProps) {
  const href = "mailto:support@prolog-app.com?subject=Support Request";
  const text = "Support";
  return (
    <ListItem className={className}>
      <Anchor as={SendEmail} href={href}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <Icon src={iconSrc} alt={`${text} icon`} /> {!isCollapsed && text}
      </Anchor>
    </ListItem>
  );
}
