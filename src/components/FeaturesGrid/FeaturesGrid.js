import React from 'react';
import Card from '../Card';
import { Grid, GridItem } from '../Grid';

import AwardIcon from './assets/award.svg';
import UserCheckIcon from './assets/user_check.svg';
import WatchIcon from './assets/watch.svg';
import UsersIcon from './assets/users.svg';
import MonitorIcon from './assets/monitor.svg';

const FeaturesGrid = () => (
  <Grid
    itemWidth={457}
    marginRightPerCent={8.202}
    marginBottomPx={54}
  >
      <Card
        icon={AwardIcon}
        title="Kvalita"
      >
        Výber kvalitných stavebných materiálov je jedným z hlavných pilierov úspešného projektu. Nechajte to na nás!
      </Card>
      <Card
        icon={UserCheckIcon}
        title="Zodpovednosť"
      >
        Ku každej požiadavke našich zákazníkov pristupujeme s najvyššou mierou zodpovednosti.
      </Card>
      <Card
        icon={WatchIcon}
        title="Rýchlosť"
      >
        Každý z projektov sa pokúšame dokončiť čo najrýchlejšie. Samozrejme bez úhonu na kvalite.
      </Card>
      <Card
        icon={UsersIcon}
        title="Skúsenosti"
      >
        Naše dlhoročné skúsenosti z oblasti stavebníctva využijeme aj pri realizácii Vašich plánov.
      </Card>
      <Card
        icon={MonitorIcon}
        title="Kreativita"
      >
        Ak si nie ste istí so svojim vlastným plánovaním, ponúkneme Vám kreatívne riešenia a rady.
      </Card>
  </Grid>
);

export default FeaturesGrid;