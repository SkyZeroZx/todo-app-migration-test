import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconsModule } from '../icons/icons.module';

@NgModule({
  imports: [
    // keep this module retained by migration because of withConfig usage
    FormsModule.withConfig({ callSetDisabledState: 'whenDisabledForLegacyCode' }),
    // this module is expected to be pruned incorrectly in the bug
    IconsModule,
  ],
  exports: [IconsModule],
})
export class SharedModule {}
