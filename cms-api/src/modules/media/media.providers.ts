import { Provider, ReflectiveInjector, ResolvedReflectiveProvider } from 'injection-js';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MediaRouter } from './media.route';

const MediaProviders: Provider[] = [MediaService, MediaController, MediaRouter]
export const ResolveMediaProviders: ResolvedReflectiveProvider[] = ReflectiveInjector.resolve(MediaProviders);