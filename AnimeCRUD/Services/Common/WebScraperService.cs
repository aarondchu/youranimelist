using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using HtmlAgilityPack;

namespace ProjectCRUD.Services.Common
{
    public class WebScraperService : IWebScraperService
    {
        public string Scrape()
        {
            string headlines = "";
            string url = "https://www.reddit.com/r/anime/search?q=flair_name:%22News%22&restrict_sr=1&t=day&sort=top";
            HtmlDocument doc = new HtmlDocument();
            doc.OptionFixNestedTags = true;

            // if you are using SSL use the following line
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12 | SecurityProtocolType.Ssl3 | SecurityProtocolType.Tls11;

            HttpWebRequest req = HttpWebRequest.Create(url) as HttpWebRequest;

            req.Method = "GET";
            /* Sart browser signature */
            req.UserAgent = "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0";
            req.Accept = "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8";
            req.Headers.Add(HttpRequestHeader.AcceptLanguage, "en-us,en;q=0.5");
            /* Sart browser signature */

            WebResponse response = req.GetResponse();

            doc.Load(response.GetResponseStream(), true);
            if (doc.DocumentNode != null)
            {
                var root = doc.DocumentNode;
                var hrefNodes = doc.QuerySelectorAll("a.SQnoC3ObvgnGjWt90zD9Z").ToList();
                if (hrefNodes.Count > 10)
                {
                    hrefNodes.RemoveRange(10, hrefNodes.Count - 10);
                }
                foreach (HtmlNode node in hrefNodes)
                {
                    headlines += $"<li class='list-group-item' style='border-color:#d9534f !important;'><a href={"http://www.reddit.com" + node.Attributes["href"].Value} target='_blank'>{node.InnerText.Trim()}</a></li>";
                }
                headlines += $"<li class='list-group-item' style='border-color:#d9534f !important;'><a href='https://www.reddit.com/r/anime/search?q=flair_name:%22News%22&restrict_sr=1&t=day&sort=top' target='_blank'>See more...</a></li>";
                return headlines;
            }
            return null;

        }
    }
}