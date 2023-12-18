import { HttpClientModule } from "@angular/common/http";
import {
  ApplicationConfig,
  importProvidersFrom,
  mergeApplicationConfig,
} from "@angular/core";
import { provideServerRendering } from "@angular/platform-server";
import { appConfig } from "./app.config";

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(), importProvidersFrom(HttpClientModule)],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
