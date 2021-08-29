import { render, screen } from "@testing-library/react";
import NewsItem from "./NewsItem";


describe('newsItem props test', ()=> {
  const props = {
    title: 'Title',
    summary: 'Text text text', 
    imageUrl: 'http://jpg.ru', 
    url: 'http://news.ru'
  }
  it('render props title', ()=> {
    const { title, summary, imageUrl, url } = props
    render(<NewsItem title={title} summary={summary} imageUrl={imageUrl} url={url}/>);
    const textTitle = screen.getByText(title);
    expect(textTitle).toBeInTheDocument();
  });
  it('render props summary', ()=> {
    const { title, summary, imageUrl, url } = props
    render(<NewsItem title={title} summary={summary} imageUrl={imageUrl} url={url}/>);
    const textSummary = screen.getByText(summary);
    expect(textSummary).toBeInTheDocument();
  });
  it('render props url link', ()=> {
    const { title, summary, imageUrl, url } = props
    render(<NewsItem title={title} summary={summary} imageUrl={imageUrl} url={url}/>);
    const textUrl = screen.getByAltText(title);
    expect(textUrl).toBeInTheDocument();
  });
})