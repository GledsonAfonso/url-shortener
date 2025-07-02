export class UrlUtils {
  static getFormattedUrl(request: Request, url: string): string {
    return `${request['protocol']}://${request['host']}/${url}`;
  }
}
