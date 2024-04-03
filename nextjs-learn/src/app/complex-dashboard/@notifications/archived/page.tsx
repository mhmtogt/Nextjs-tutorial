import Card from '@/componenets/card';
import React from 'react';
import Link from 'next/link';



export default function ArchivedNotifications() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  ) 
}
