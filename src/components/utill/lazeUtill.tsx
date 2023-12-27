import { lazy, LazyExoticComponent } from 'react';

type ComponentImportFunction = () => Promise<{ default: React.ComponentType<any> }>;

export const retryLazy = (componentImport: ComponentImportFunction): LazyExoticComponent<React.ComponentType<any>> =>
  lazy(async () => {
    const pageAlreadyRefreshed = JSON.parse(
      window.localStorage.getItem('pageRefreshed') || 'false'
    );
    try {
      const component = await componentImport();
      window.localStorage.setItem('pageRefreshed', 'false');
      return component;
    } catch (error) {
      if (!pageAlreadyRefreshed) {
        window.localStorage.setItem('pageRefreshed', 'true');
        window.location.reload();
        return new Promise((resolve, reject) => {
          reject(error); // 여기서 오류를 다시 발생시킵니다.
        });
      }
      throw error;
    }
  });
