  
import React from 'react';
import { render, fireEvent,act  } from '@testing-library/react';
import Timer from './Timer';














    

        
          test('testing the start button', () => {
  
            jest.useFakeTimers();
        
            const renderObj = render(<Timer />);
          
            expect(renderObj.getByText(/0 : 0/i)).toBeInTheDocument();
        
          
         
              act(() => {
                fireEvent.click(renderObj.getByText(/Start/i));
                jest.advanceTimersByTime(50000);
               
                })
        
                expect(renderObj.getByText(/0 : 50/i)).toBeInTheDocument();
            
          
          });
        

          test('testing the stop button', () => {
  
            jest.useFakeTimers();
        
            const renderObj = render(<Timer />);
          
            expect(renderObj.getByText(/0 : 0/i)).toBeInTheDocument();
        
          
         
              act(() => {
                fireEvent.click(renderObj.getByText(/Start/i));
                jest.advanceTimersByTime(50000);
                fireEvent.click(renderObj.getByText(/Stop/i));
                jest.advanceTimersByTime(50000);
                fireEvent.click(renderObj.getByText(/Stop/i));
                })
        
                expect(renderObj.getByText(/0 : 50/i)).toBeInTheDocument();
            
          
          });
        


test('testing the reset button', () => {
  
  jest.useFakeTimers();

  const renderObj = render(<Timer />);

  expect(renderObj.getByText(/0 : 0/i)).toBeInTheDocument();



    act(() => {
      fireEvent.click(renderObj.getByText(/Start/i));
      jest.advanceTimersByTime(30000);
      fireEvent.click(renderObj.getByText(/reset/i));
     
      })

    
expect(renderObj.getByText(/0 : 0/i)).toBeInTheDocument();
  

});



  
  test('render timer start button', () => {
      const renderObj = render(<Timer />);
      const linkElement = renderObj.getByText(/Start/i);
    
      expect(linkElement).toBeInTheDocument();
    });
  
  
    
  test('render timer Stop button', () => {
      const renderObj = render(<Timer />);
      const linkElement = renderObj.getByText(/Stop/i);
    
      expect(linkElement).toBeInTheDocument();
    });
  
     
  test('render timer Reset button', () => {
      const renderObj = render(<Timer />);
      const linkElement = renderObj.getByText(/Reset/i);
    
      expect(linkElement).toBeInTheDocument();
    });
  










